import React, { useState, useCallback, DependencyList } from 'react';
import './page.css';

import { Link } from 'react-router-dom'

import { apiPostFn } from '../util'


interface AsyncHook {
    loading: boolean
    error: Error | undefined
    submit: () => any
}

export function useApi<T>(action: () => Promise<T>, deps: DependencyList = []): AsyncHook {
    // Loading and error states
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | undefined>(undefined)

    // Memoize the action
    const safeAction = useCallback(action, deps)

    // - async execution
    const submit = useCallback(async () => {
        let result
        setLoading(true)
        setError(undefined)
        try {
            result = await safeAction()
        } catch (e) {
            setError(e)
        }
        setLoading(false)
        return result
    }, [safeAction])

    return { loading, error, submit }
}

const UseApi: React.FC = () => {

    const formData = {
        sky: 'blue',
        name: 'ralph'
    }

    const [checked, setChecked] = useState(false)

    const form = useApi(() => apiPostFn(formData, checked), [checked])

    return (
        <div className="page">
            <div className="title">useApi</div>
            <div className="content">
                <div>
                    Loading: { form.loading ? 'true' : "false" }
                </div>
                <div>
                    Error: { form.error ? form.error.message : "none" }
                </div>
                <div><input type="checkbox" onChange={e => setChecked(e.target.checked)}/>error out</div>
                <div>
                    <button onClick={form.submit}>submit</button>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseApi;
