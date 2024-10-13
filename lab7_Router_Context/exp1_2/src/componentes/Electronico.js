import imagenElect1 from '../imagenes/electronico.jpg';  
import imagenElect2 from '../imagenes/AppleWatch.jpg';  
import imagenElect3 from '../imagenes/camara.jpg';  
import imagenElect4 from '../imagenes/iphone.jpg';  

export default function Electronico() {  
    return (  
        <div style={containerStyle}>  
            <h2>Categoria Electrónicos</h2>  
            <p>A continuación se muestran algunos productos electrónicos.</p>  
            <img src={imagenElect1} alt="Electrónico" style={categoryImageStyle} />  
            <button style={buttonStyle}>Ir a la tienda</button>  
            <h3>Productos Destacados</h3>  
            <ul style={gridStyle}>  
                <li style={productStyle}>  
                    <img src={imagenElect2} alt="Apple Watch" style={productImageStyle} />  
                    <p> Apple Watch - S/.900.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={imagenElect3} alt="Cámara" style={productImageStyle} />  
                    <p>Cámara - S/.250.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={imagenElect4} alt="iPhone" style={productImageStyle} />  
                    <p> MAC+IPHONE - S/.5000.00</p>  
                </li>  
            </ul>  
        </div>  
    );  
}  

const containerStyle = {  
    maxWidth: '800px',  
    margin: '0 auto',  
    padding: '20px',  
    textAlign: 'center',  
};  

const categoryImageStyle = {  
    width: '100%',  
    height: 'auto',  
    objectFit: 'cover',  
    marginBottom: '20px',  
};  

const gridStyle = {  
    display: 'grid',  
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
    gap: '20px',  
    padding: '0',  
    listStyleType: 'none',  
};  

const productStyle = {  
    border: '1px solid #ddd',  
    borderRadius: '5px',  
    padding: '10px',  
    textAlign: 'center',  
    backgroundColor: '#f9f9f9',  
};  

const productImageStyle = {  
    width: '100%',  
    height: '150px',  
    objectFit: 'cover',  
    borderRadius: '5px',  
    marginBottom: '10px',  
};  

const buttonStyle = {  
    backgroundColor: '#ff4081',  
    color: '#fff',  
    padding: '10px 20px',  
    border: 'none',  
    borderRadius: '5px',  
    cursor: 'pointer',  
    display: 'block',  
    margin: '10px auto', 
    transition: 'background-color 0.3s',
};  

buttonStyle[':hover'] = {  
    backgroundColor: '#d5006d', 
};