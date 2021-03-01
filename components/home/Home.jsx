import Button from '../../components/home/Button'

import Style from '../../styles/home/Home.module.scss'

const Home = () =>{
    return(
        <div className={Style.containerHome}>
            <div className={Style.contentText}>
                <div className={Style.text}>
                    <h1 className={Style.h1}>¡Bienvenidos a <br/> Keiken!</h1>
                    <br/>
                    <p className={Style.p}>Hola!! Bienvenidos a keiken heladeria, esperamos que estés muy bien, somos una heladería que quiere brindar experiencias y productos llenos de amor.</p>
                    <br/>
                    <div className={Style.buttons}>
                        <a href="https://www.whatsapp.com/catalog/573207454040/?app_absent=0" target="_blank">
                            <Button background="#C5FFBC" color="#94FF8B" text="Whatsapp" image="whatsapp.svg"/>
                        </a>
                        <Button background="none" color="white" text="Ver yobi" image="yobi.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home