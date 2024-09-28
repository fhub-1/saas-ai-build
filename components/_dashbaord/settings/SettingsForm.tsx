"use client"

// src/components/settings/SettingsForm.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SettingsForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="johndoe" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="john@example.com" />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          className="w-full p-2 border rounded"
          defaultValue="I'm a software developer..."
        />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  )
}