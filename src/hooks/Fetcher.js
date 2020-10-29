import useSwr from 'swr'
import api from '../service/api'

export default function Fetcher(url) {
    const { data, error, mutate } = useSwr(url, async url => {
        const response = await api.get(url)

        return response.data
    }, {
        refreshInterval: 500
    })

    return { data, error, mutate }
}