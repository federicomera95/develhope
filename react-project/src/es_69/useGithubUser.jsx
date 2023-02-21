import useSWR  from "swr";

const fetcher = url => fetch(url).then(response => response.json())

const useGithubUser = ({username}) => {
   
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`,!!username && fetcher);

    const handleRefreshUser = () => {
        mutate()
    }

    return { user: data, error, isLoading: !data && !error, onRefresh: handleRefreshUser };
   
}

export default useGithubUser;