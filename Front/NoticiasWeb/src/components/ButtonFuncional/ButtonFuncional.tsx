import "./ButtonFuncional.css";
import Button from 'react-bootstrap/Button';
interface Props {
    variante: string;
    label: string;
    parentMethod: () => void;
}

export const ButtonFuncional = ({variante, label, parentMethod}: Props) => {

    return (
        <Button variant="secondary" className="custom-button" onClick={parentMethod}>
            {label}
        </Button>
    );
}