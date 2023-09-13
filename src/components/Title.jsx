import './styles/Title.css'

function Title({ title, bgcolor, }) {
    return (
        <div style={{display: 'flex', alignContent: 'left', background: bgcolor ? bgcolor: '', margin: 0, width: "80%", borderBottomRightRadius: "30px"}}>
            <p className='title'>{title}</p>
        </div>
    )
}

export default Title;