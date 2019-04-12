import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">CKEditor With React</h1>
            <div className="row">
                <div className="col-12 my-10 my-3">
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>CKEditor With React</p>"
                        onInit={ editor => {
                            console.log( 'Editor is ready to use!', editor )
                        }}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData()
                            console.log( { event, editor, data } )
                        }}
                        onBlur={ editor => {
                            console.log( 'Blur.', editor )
                        }}
                        onFocus={ editor => {
                            console.log( 'Focus.', editor )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
