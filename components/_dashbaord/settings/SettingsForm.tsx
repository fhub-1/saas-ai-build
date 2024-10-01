"use client"

// src/components/settings/SettingsForm.tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SettingsForm() {
  const [autoComplete, setAutoComplete] = useState(true)

  return (
    <form className="space-y-8">
      <div className="space-y-2">
         <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="language">Preferred Programming Language</Label>
            <Select>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="csharp">C#</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="completion-style">Code Completion Style</Label>
            <Select>
              <SelectTrigger id="completion-style">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservative</SelectItem>
                <SelectItem value="balanced">Balanced</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">AI Features</h2>
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-complete"
            checked={autoComplete}
            onCheckedChange={setAutoComplete}
          />
          <Label htmlFor="auto-complete">Enable Auto-Complete</Label>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">API Integration</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input id="api-key" type="password" value="••••••••••••••••" readOnly />
          </div>
          <div className="flex items-end">
            <Button>Generate New Key</Button>
          </div>
        </div>
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  )
}