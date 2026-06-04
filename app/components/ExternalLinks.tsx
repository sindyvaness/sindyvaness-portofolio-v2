import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const ExternalLinks = () => {
    return (
        <div className="external-links" aria-label="External links">
            <div>
                <a href="https://github.com/sindyvaness/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/sindy-vanessa-montano/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://learn.microsoft.com/en-us/users/sindyvanessamontao-9072/transcript/d4ye3am310lyrpw?tab=credentials-tab" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMicrosoft} size="2x" /></a>
            </div>
        </div>
    );
};

export default ExternalLinks;