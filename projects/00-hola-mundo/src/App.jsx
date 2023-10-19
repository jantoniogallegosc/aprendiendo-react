import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className="App">
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="antonio" >
                Juan Antonio
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName="midudev" >
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="pheralb" >
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="elonmusk" >
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="vxnder" >
                VanderHart
            </TwitterFollowCard>
        </section>
    )
}