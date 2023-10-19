import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    const users = [
        {
            userName: 'antonio',
            name: 'Juan Antonio',
            isFollowing: true
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: false
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernandez',
            isFollowing: true
        },
        {
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: true
        },
        {
            userName: 'vxnder',
            name: 'VanderHartk',
            isFollowing: true
        },
    ]

    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUserName={format} 
                            userName={userName} 
                            initialFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
            {/* <TwitterFollowCard 
                formatUserName={format} 
                userName="midudev" >
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                userName="pheralb" >
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                userName="elonmusk" >
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                userName="vxnder" >
                VanderHart
            </TwitterFollowCard> */}
        </section>
    )
}