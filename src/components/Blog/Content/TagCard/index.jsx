import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

const TagCard = props => {
    const toSomeArts = tag => {
        props.history.push(`/artTag?tag=${tag}`);
    };
    return (
        <div className="animated bounceInRight">
            <div className="aside-card TagCard-box transparent-box">
                {props.tags.map(item => (
                    <span
                        className="theTag common-hover"
                        key={item._id}
                        onClick={() => toSomeArts(item.tag)}
                    >
                        {item.tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default withRouter(
    connect(
        state => ({
            tags: state.tags,
        }),
        {}
    )(TagCard)
);
