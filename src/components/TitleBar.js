import './TitleBar.css';

function TitleBar() {
    return (
        <div className="title-bar">
            <img src={process.env.PUBLIC_URL +'/logo/CoTeach-logo.svg'} className="logo" alt="logo" />
            <p>我們彙整了網路上的教案資源。</p>
        </div>
    );
}


export default TitleBar;
