import ropaImagen from '../imagenes/ropa.JPG';  
import ropa1Imagen from '../imagenes/polos.jpg';  
import jeansImagen from '../imagenes/jeans.jpg';  
import conjuntoImagen from '../imagenes/conjunto.jpg';  

export default function Clothing() {  
    return (  
        <div style={containerStyle}>  
            <h2>Categoria Ropa</h2>  
            <img src={ropaImagen} alt="ROPA" style={categoryImageStyle} />  
            <h3>Productos Destacados</h3>  
            <ul style={gridStyle}>  
                <li style={productStyle}>  
                    <img src={ropa1Imagen} alt="Polos crop" style={productImageStyle} />  
                    <p>Producto 1 - S/.35.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={jeansImagen} alt="JEANS" style={productImageStyle} />  
                    <p>Producto 2 - S/.85.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={conjuntoImagen} alt="Conjunto" style={productImageStyle} />  
                    <p>Producto 3 - S/.120.00</p>  
                </li>  
                {}  
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Cuadrícula responsiva  
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