import logo from "../assets/images/b-logo.png";

export default function BrowseCard(props) {
    return props.data.map((item) => (
        // <a href="/view/{{id}}">
            <div class="card item-card" style={{width: "18rem"}}>
                <li class="card-title list-group-item">{item.title}</li>
                <div class="browse-img-div">
                    <img src={logo} class="card-img-top browse-logo" alt="produce-pic"/>
                </div>
                <div class="card-body">
                    <p class="card-text">${item.item_price}/{item.item_unit}</p>
                    <p class="card-text">Quantity: {item.item_quantity}</p>
                </div>
            </div>
        // </a>
    ));
}