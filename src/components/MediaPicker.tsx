'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, SetPreview] = useState<string | null>(null)

  function onFileSelected(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        className="invisible h-0 w-0"
      />

      {preview && (
        <Image
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
