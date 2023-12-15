import "./index.css";

export default function Contact({ 
    name,
    image,
    response_rate,
    response_time,
    info,
    phone,
})  {  
    return (
        <div className="contact">
            <span className="contact__head">
            <span className="contact__image">
                    <img  src={image} alt={" "} className="contact__img"/>
                </span>
            <h1 className="contact__text">Господар-{name}</h1>
            </span>
            <div className="contact__sub-block">
                
                <span className="contact__sub-value">{phone}</span>
                <span className="contact__sub-value">{response_time}</span>
                <span className="contact__sub-value">{response_rate} відсотків швидкості відгуку</span>
                </div>
                <span className="contact__sub-value ">{info}</span>
             
            
        </div>

    );
}