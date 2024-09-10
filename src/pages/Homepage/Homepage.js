import { useEffect } from 'react';
import style from './Homepage.module.css';
import Botao from '../../component/Botao/Botao';
import Logo from '../../assets/Img/Logo.png';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const image = document.querySelector(`.${style.quadrado2} img`);
            const scrollPosition = window.scrollY;
        

            if (scrollPosition > 10) {
                image.classList.add(style.moveLeft);
            } else {
                image.classList.remove(style.moveLeft);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [style]);

    return (
        <div className={style.tela}>
            <div className={style.container}>
                <div className={style.quadrado}>
                    <div className={style.triangulo}></div>
                    <div className={style.navibar}>
                        <h4 onClick={() => navigate('/')}>INICIO</h4>
                        <h4>DOAÇÕES</h4>
                        <Botao children={"CADASTRA-SE"} onClick={() => navigate('/cadastro')} color={'orengeButton'}/>
                    </div>
                </div>
                <div className={style.quadrado2}>
                    <div className={style.texto}>
                        <h1>Cuide de <span className={style.italico}>Quem Fez História Apoie e Valorize</span> Nossos Mais Velhos</h1>
                        <h6>Junte-se a nós para fazer a diferença na vida daqueles que moldaram nosso caminho</h6>
                        <Botao children={"ENTRAR"} onClick={() => navigate('/login')} color={'orengeButton2'}/>
                    </div>
                    <img src={Logo} alt="imagem" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
