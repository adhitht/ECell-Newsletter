import './styles/Startups.css';

function Startups({ title, align, children }) {
    return (
        <div className='Startupscont' style={{ color: "black", margin: "10px", borderTopRightRadius: align == "left" ? "20px" : 0,borderBottomRightRadius: align == "left" ? "20px" : 0, borderBottomLeftRadius: align == "right" ? "20px" : 0, borderTopLeftRadius: align == "right" ? "20px" : 0 }}>
            <p className='startuptitle'>{title}</p>
            <hr style={{ height: '2px', background: '#FF7806', width: '80%', alignItems: 'left', paddingTop: '2px', margin: '15px 0 0 0' }} />
            <ol className='Startupscontent'>
                {children}
            </ol>
        </div>
    )
}


export default Startups;