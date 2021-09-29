import logo from '../logo/logo.svg';
export function Start({ className, mainTitle }) {
    return (
        <div className={className}>
            < p className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {mainTitle}
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            < a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn how to send message!
            </a>
        </div>
    )
}