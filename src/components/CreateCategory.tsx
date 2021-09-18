import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { CREATE_CATEGORY } from "../apolloClient/useCategory"
import { GET_CATEGORIES } from "../apolloClient/useCategory"

const CreateCategory: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
  })

  const [createCategory, { loading }] = useMutation(CREATE_CATEGORY)

  async function createCategoryHandler() {
    try {
      await createCategory({
        variables: {
          data: {
            ...formData,
          },
        },
        refetchQueries: [{ query: GET_CATEGORIES }],
      })
    } catch (e) {
      console.log(e)
    }
  }

  function onChangeName(e) {
    formData.name = e.target.value
    setFormData({ ...formData })
  }

  function onChangeCode(e) {
    formData.code = e.target.value
    setFormData({ ...formData })
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <input value={formData.name} onChange={onChangeName} />
      </div>
      <div>
        <label>Code</label>
        <input value={formData.code} onChange={onChangeCode} />
      </div>
      {loading ? (
        <span>Creating......</span>
      ) : (
        <button onClick={createCategoryHandler}>Create Category </button>
      )}
    </div>
  )
}

export default CreateCategory
