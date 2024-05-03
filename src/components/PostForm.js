export default function PostForm({createPost}){

  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    createPost(content)
    e.target.content.value = ""
  }

  return <form className="post-form" onSubmit={handleSubmit}>
    <textarea name="content"/>
    <input value="Send ↠" type="submit"/>
  </form>
}