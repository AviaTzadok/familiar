import { useState } from 'react';
import './Level1.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box } from '@mui/system';

const Level1 = () => {
    const data = [{
        name: "מירי",
        img: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
    },
    {
        name: "מרים",
        img: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    }]
    const [index, setIndex] = useState(0)
    // const time = setInterval(() => {
    //     setIndex(index + 1)
    // }, 7000)
    console.log(index);
    if (index === data.length - 1) {
        // clearInterval(time)
        console.log('clear');
    }
    return (
        <div className='Level1'>
            <div>
                <img src={data[index].img} alt={data[index].name} className='image' />
            </div>
            <Box className="controlers">
                <ArrowCircleLeftIcon
                    onClick={() => { setIndex(index - 1) }} />
                <span className='name'>{data[index].name}</span>
                <ArrowCircleRightIcon
                    onClick={() => { setIndex(index + 1) }} />
            </Box>
        </div>
    )
}

export default Level1;