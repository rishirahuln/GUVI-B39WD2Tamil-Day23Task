import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function Card({card}) {
    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{card.tierName}</h5>
            <h6 className="card-price text-center">${card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                card.features.map((feature,index)=>{
                    return feature.isDisabled ? 
                    <li key={index} className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faXmark} /></span>{feature.featName}</li> : 
                    feature.isBold ? 
                    feature.isBoldFirstWordAlone ? 
                    <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>{feature.featName.split(" ")[0]} </strong>{feature.featName.split(" ").splice(1,feature.featName.split(" ").length-1).join(" ")}</li> : 
                    <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>{feature.featName}</strong></li> : 
                    <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{feature.featName}</li>
                })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;