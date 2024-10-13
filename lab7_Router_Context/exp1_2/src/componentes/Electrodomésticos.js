import electrodomesticosImagen from '../imagenes/electrodomesticos.jpg';  
import licuadoraImagen from '../imagenes/licuadora.jpg';  
import aspiradoraImagen from '../imagenes/aspiradora.jpg';  

export default function Electrodomesticos() {  
    return (  
        <div style={containerStyle}>  
            <h2>Categoria Electrodomésticos</h2>  
            <img src={electrodomesticosImagen} alt="Electrodomésticos" style={categoryImageStyle} />  
            <h3>Productos Destacados</h3>  
            <ul style={gridStyle}>  
                <li style={productStyle}>  
                    <img src={licuadoraImagen} alt="Licuadora" style={productImageStyle} />  
                    <p>Licuadora - S/.200.00</p>  
                </li>  
                <li style={productStyle}>  
                    <img src={aspiradoraImagen} alt="Aspiradora" style={productImageStyle} />  
                    <p>Aspiradora - S/.300.00</p>  
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
