import React, { useState, useCallback, useEffect, DependencyList } from 'react';
import './page.css';

import { Link } from 'react-router-dom'

import { apiGetFn } from '../util'

import { useApi } from './UseApi'


interface AsyncData<T> {
    loading: boolean
    error: Error | undefined
    data: T | undefined
    reload: () => void
}

export function useApiData<T>(action: () => Promise<T>, deps: DependencyList = [], initialValue?: T): AsyncData<T> {
    // useApiData
    // - api hook with added data
    const [data, setData] = useState(initialValue)
    const { loading, error, submit } = useApi(action, deps)

    // - if making api requests, need to establish a cancel request fn
    const cancel = () => undefined

    // - adapt submit function into data loading function
    const reload = useCallback(async () => {
        const d = await submit()
        if (d) {
            setData(d)
        }
    }, [submit])
    
    // - instead of waiting to be fired, fire on component mount to retrieve data
    useEffect(() => {
        reload()
        return cancel
    }, [reload])

    return { loading, error, reload, data }
}

const UseApi: React.FC = () => {

    const [checked, setChecked] = useState(false)

    const data = useApiData(() => apiGetFn('idValue',checked), [])

    return (
        <div className="page">
            <div className="title">useApiData</div>
            <div className="content">
                <div>
                    Loading: { data.loading ? 'true' : "false" }
                </div>
                <div>
                    Error: { data.error ? data.error.message : "none" }
                </div>
                <div>
                    Result: { data.data }
                </div>
                <div><input type="checkbox" onChange={e => setChecked(e.target.checked)}/>Error out</div>
                <div>
                    <button onClick={data.reload}>reload</button>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseApi;
