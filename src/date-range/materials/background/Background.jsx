import { Container } from './Background.styled';

function Background (props) {
    const { action } = props;

    return (
        <Container onClick={action} />
    );
}

export default Background;