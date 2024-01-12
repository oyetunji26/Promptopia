'use client';

import { useState, useEffect } from 'react'
// import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@components/Form';
// import { ReturnDocument } from 'mongodb';

const EditPrompt = () => {

  const router = useRouter();
  // to navigate to another route

  const searchParams = useSearchParams(); // to get params from the route
  const promptId = searchParams.get("id");
  console.log(promptId);
  // this promptId already specified get

//   const { data: session } = useSession();

const [post, setPost] = useState({ prompt: "", tag: "", });
const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId])
  
 
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // to check if theres promptId or not
    if (!promptId) return alert("Missing PromptId!");


    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type = "Edit"
      post = {post}
      setPost = {setPost}
      submitting = {submitting}
      handleSubmit = {updatePrompt}
    />
  )
}

export default EditPrompt