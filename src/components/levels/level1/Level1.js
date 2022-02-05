import './Level1.css';
import { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

const Level1 = () => {
    const [index, setIndex] = useState(0);
    const data = [{
        name: "מירי",
        img: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
    },
    {
        name: "משה",
        img: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
    },
    {
        name: "מרים",
        img: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    }]
    const dataIndexes = data.length - 1;

    const skip = () => {
        console.log('skip', index);
        if (index === dataIndexes) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const previous = () => {
        console.log('pre', index);
        if (index === 0) {
            console.log(data.length - 1);
            setIndex(dataIndexes)
        } else {
            setIndex(index - 1)
        }
    }
    const time = setInterval(skip, 7000)
    const stop = () => {
        clearInterval(time)
    }
    const timeStop = setTimeout(stop, dataIndexes * 7000)


    return (
        <div className='Level1'>
            <div className='image_container'>
                <img src={data[index].img} alt={data[index].name} className='image' />
            </div>
            <Box className="controlers">
                <ArrowCircleLeftIcon
                    onClick={() => { previous() }} />
                <span className='name'>{data[index].name}</span>
                <ArrowCircleRightIcon
                    onClick={() => { skip() }} />
                <CloseIcon
                    onClick={() => { stop() }} />
            </Box>
        </div>
    )
}

export default Level1;