import Style from '../../styles/home/Button.module.scss'

const Button = (props) =>{
    return(
        <>
            <button type="button" className={Style.button} style={{background:props.background, color:props.color}}>
                {props.text}
                <img className={Style.img} src={`/home/icons/${props.image}`} alt="icon"/>
            </button>
        </>
    )
}

export default Button