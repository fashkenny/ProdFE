import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import MyColumnCard from '../components/static/MyColumnCard'
import { readTask } from '../utils/taskAPI'
import { useQuery } from "@tanstack/react-query"



const HomeScreen = () => {

    // const [state, setState] = useState<any>([])

    // useEffect(() => {
    //     readTask().then((res: any) => {
    //         setState(res)
    //     })
    // }, [])

    const { data } = useQuery({
        queryKey: ["tasks"],
        queryFn: readTask,
        refetchInterval: 1000
    })

    return (
        <div>
            <Container>
                <Main>
                    <MyColumnCard
                        title="task"
                        icon
                        data={data}
                    />
                    <MyColumnCard
                        title="progress"

                    />
                </Main>
            </Container>
        </div>
    )
}

export default HomeScreen

const Main = styled.div`
display:flex;
justify-content: center;
width: 100%;
`

const Container = styled.div`
display:flex;
justify-content: center;
width: 100%;
padding-top: 50px
`
