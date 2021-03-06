import './mylabel.css';

export interface MyLabelProps {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
     * Este es el tamaño de la etiqueda
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * para colocar el texto en mayuscula
     */
    allCaps?: boolean;
    /**
     * colores basicos del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * para el color del texto personalizado
     */
    customColor?: string;
    /**
     * para el color de fondo
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label' , size = 'normal',
    color = 'primary', allCaps = false,
    customColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: customColor, backgroundColor }} >
            { (allCaps) ? label.toUpperCase() : label}
        </span>
    );
};

export default MyLabel;