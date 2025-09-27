import Icon_error from '../assets/images/icon-error.svg';

function ErrorPage() {
    return (
        <section>
            <div className='content'>
                <img src={Icon_error} alt="" className='error_icon' />
                <h1>Something went wrong</h1>
                <p>We couldn't conect to ther server(API error). Please try again in a few moments </p>
                <a href="/" className='retry-btn'>Retry</a>
            </div>
        </section>
    );
}

export default ErrorPage;