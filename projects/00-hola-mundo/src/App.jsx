import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src="https://i.ytimg.com/vi/qUGRNpSweBI/maxresdefault.jpg" 
                    alt="El avatar" />
                <div className='tw-followCard-info'>
                    <strong>Juan Antonio</strong>
                    <span className='tw-followCard-infoUserName'>@antonio</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}