import './Styles/PastClients.css';

const PastClients = () => {
    const clients = [
        {
            name: 'company 1',
            img: 'comapny-1.jpg',
            id: '1'
        },
        {
            name: 'company 2',
            img: 'company-2.jpg',
            id: '2'
        },
        {
            name: 'company 3',
            img: 'company-3.jpg',
            id: '3'
        },
        {
            name: 'company 4',
            img: 'company-4.jpg',
            id: '4'
        }
    ];

    return (
        <>
            <h1 className="client-card-heading">Our Past Clients</h1>
            <div className="client-cards-container">
                { clients.map((client) => (
                    <div className="client-card" key={ client.id }>
                        <div className="client-info-container">
                            <img src={client.img} alt={ client.title } className="client-image" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default PastClients;