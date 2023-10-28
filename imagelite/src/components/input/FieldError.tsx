interface FieldErrorProps {
    error: any | null;
}

export const FieldError: React.FC<FieldErrorProps> = ({
    error
}) => {

    if(error){
        return (
            <span className="text-red-500 text-sm">{error}</span>
        )
    }

    return false;
}