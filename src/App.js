import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';

function App() {
  const cardDetails = [
    {
      tierName: "free",
      price: 0,
      features: [
        {
          featName: "Single User"
        },
        {
          featName: "5GB Storage"
        },
        {
          featName: "Unlimited Public Projects"
        },
        {
          featName: "Community Access"
        },
        {
          featName: "Unlimited Private Projects",
          isDisabled: true
        },
        {
          featName: "Dedicated Phone Support",
          isDisabled: true
        },
        {
          featName: "Free Subdomain",
          isDisabled: true
        },
        {
          featName: "Monthly Status Reports",
          isDisabled: true
        }
      ]
    },
    {
      tierName: "plus",
      price: 9,
      features: [
        {
          featName: "5 Users",
          isBold: true
        },
        {
          featName: "50GB Storage"
        },
        {
          featName: "Unlimited Public Projects"
        },
        {
          featName: "Community Access"
        },
        {
          featName: "Unlimited Private Projects"
        },
        {
          featName: "Dedicated Phone Support"
        },
        {
          featName: "Free Subdomain"
        },
        {
          featName: "Monthly Status Reports",
          isDisabled: true
        }
      ]
    },
    {
      tierName: "pro",
      price: 49,
      features: [
        {
          featName: "Unlimited Users",
          isBold: true
        },
        {
          featName: "150GB Storage"
        },
        {
          featName: "Unlimited Public Projects"
        },
        {
          featName: "Community Access"
        },
        {
          featName: "Unlimited Private Projects"
        },
        {
          featName: "Dedicated Phone Support"
        },
        {
          featName: "Unlimited Free Subdomains",
          isBold: true,
          isBoldFirstWordAlone: true
        },
        {
          featName: "Monthly Status Reports"
        }
      ]
    }
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            cardDetails.map((card,index)=>{
              return <Card key={index} card={card}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
