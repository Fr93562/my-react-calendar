function Logo(props) {
    const { draw, color } = props;

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d={draw} fill={color} />
        </svg>
    );
}

export default Logo;