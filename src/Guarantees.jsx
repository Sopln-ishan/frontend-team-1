import './Styles/Guarantees.css';

const OurGuarantees = () => {
    const guarantees = [
        {
            icon: 'icon.jpg',
            title: 'guarantee 1'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 2'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 3'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 4'
        }
    ]

    return (
        <div className="guarantees">
            <div className="guarantees-heading">
                <h2>What We Guarantee</h2>
            </div>

            <div className="guarantee-card-container">
                { guarantees.map((guarantee, index) => (
                    <div className="guarantee-card" key={ index }>
                        <img src={ guarantee.icon } />
                        <p>{ guarantee.title }</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default OurGuarantees;