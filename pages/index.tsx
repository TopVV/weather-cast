import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Cast App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Jumbotron>
          <h1 className="text-center mb-5">Weather Cast Training App</h1>
          <Container>
            <Row>
              <Col>
                <div>First Weather-Cast Page With SSR</div>
                <Link href="/first-page">
                  <Button variant="primary">Go to page</Button>
                </Link>
              </Col>
              <Col>
                <div>Second Weather-Cast Page With Redux-Flow</div>
                <Link href="/second-page">
                  <Button variant="primary">Go to page</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </main>
    </div>
  );
}
