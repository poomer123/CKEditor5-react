import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const App = () => {
    const [data, setData] = useState(null)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-3">
                    <h1 className="text-center">CKEditor With React</h1>
                    <CKEditor
                        className="my-3"
                        editor={ ClassicEditor }
                        data="<p>CKEditor With React</p>"
                        config={{
                            toolbar: [ 'undo', 'redo', '|', 'bulletedList', 'numberedList',]
                        }}
                        onInit={ editor => {
                            console.log( 'Editor is ready to use!', editor )
                            console.log(Array.from( editor.ui.componentFactory.names() ))
                        }}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData()
                            console.log( { event, editor, data } )
                            setData(data)
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
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">Data</h2>
                    <div className="text-left my-3">
                        {data}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">To show</h2>
                    <div className="my-3" dangerouslySetInnerHTML={{ __html: data }} />
                </div>
            </div>
        </div>
    )
}

export default App
