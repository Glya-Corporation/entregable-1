const Click = ({functionChange, colors}) => {

    return (
        <div>
            <button className="btn-changes" onClick={functionChange} style={{background: `${colors}`}}><span class="material-symbols-outlined arrow">keyboard_arrow_right</span></button>
        </div>
    );
};

export default Click;