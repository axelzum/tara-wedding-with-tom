import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render(): React.ReactElement {
        return (
            <Html>
                <Head>
                    <link href='https://use.typekit.net/tlo2hmw.css' rel='stylesheet'/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
