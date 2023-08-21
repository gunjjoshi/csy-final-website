import React from 'react'
import Footer from '../app/components/footer';
import Navbar from '../app/components/navbar';
import StudentForm from '../app/components/register'

const signup = () => {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        body {
            font-family: 'Cascadia Code', 'Courier New', 'monospace';
          background-image: url("background.png");
        background-size: cover;
        background-repeat: no-repeat;
        }
      `,
                }}
            />
            <Navbar position="fixed" />
            <StudentForm />
            <Footer />
        </div>
    )
}

export default signup