import './Level1.css';
import { useEffect, useState } from 'react';
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
        img: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
    },
    {
        name: "מרים",
        img: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    }]
    const dataIndexes = data.length - 1;

    useEffect(() => {
        const time = setInterval(skip, 7000)
        return () => clearInterval(time)
    }
        , [])


    // TODO check why index inside function is 0 allways
    const skip = () => {
        setIndex(prevIndex => (prevIndex + 1) % data.length);
    }

    const previous = () => {
        console.log('pre', index);
        index === 0 ? setIndex(dataIndexes) : setIndex(index - 1);
    }

    const stop = () => {
        console.log('stop');
    }
    console.log('https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg')

    return (
        <div className='Level1'>
            <div className='image_container'>
                <img src={data[index].img} alt={data[index].name} className='image' />
            </div>
            <Box className="controlers">
                <ArrowCircleLeftIcon
                    sx={{ fontSize: 40 }}
                    onClick={() => { previous() }} />
                <span className='name'>{data[index].name}</span>
                <ArrowCircleRightIcon
                    sx={{ fontSize: 40 }}
                    onClick={() => { skip() }} />
                <CloseIcon
                    sx={{ fontSize: 40 }}
                    onClick={() => { stop() }} />
            </Box>
        </div>
    )
}

export default Level1;