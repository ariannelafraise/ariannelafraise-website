interface Props {
    title: string,
    message: string,
    color: string
};

const ProjectCard: React.FC<Props> = ({title, message, color}) => {
    return (
        <div className="border" style={{color: color, textAlign: "center", marginTop: "5vh" }}>
            <h3 style={{color: color}}>{title}</h3>
            <p style={{color: color}}>{message}</p>
        </div>
    );
};

export default ProjectCard;