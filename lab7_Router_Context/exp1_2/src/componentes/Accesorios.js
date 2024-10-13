import accesoriosImagen from '../imagenes/accesorios.jpg';  
import relojImagen from '../imagenes/reloj.jpg';  
import anilloImagen from '../imagenes/anillo.jpg';  

export default function Accesorios() {  
    return (  
        <div style={containerStyle}>  
            <h2>Categoria Accesorios</h2>  
            <img src={accesoriosImagen} alt="Accesorios" style={categoryImageStyle} />  
            <h3>Productos Destacados</h3>  
            <ul style={gridStyle}>  
                <li style={productStyle}>  
                    <img src={relojImagen} alt="Reloj" style={productImageStyle} />  
                    <p>Reloj Elegante - S/.150.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={anilloImagen} alt="Anillo" style={productImageStyle} />  
                    <p>Anillo de Plata - S/.75.00</p>  
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