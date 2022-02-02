import './Level1.css';
const Level1 = () => {
    const data = [{
        name: "miri",
        img: "./imagesEX/1.jpg"
    }]
    return <div>
        <img src={data[0].img} alt={data[0].name} />
    </div>
}

export default Level1;