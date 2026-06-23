"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Mail, Scissors } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || status !== "ready") return
    sendMessage({ text: input })
    setInput("")
  }

  const quickQuestions = [
    "What services do you offer?",
    "How do I place an order?",
    "What are your prices?",
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] shadow-2xl border-2 border-primary/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">LML Assistant</h3>
                <p className="text-xs text-primary-foreground/80">Ask me anything about our services</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="h-[300px] overflow-y-auto p-4 space-y-4 bg-background">
            {messages.length === 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Hi! I&apos;m the LML assistant. How can I help you today?
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground text-center">Quick questions:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        sendMessage({ text: question })
                      }}
                      className="w-full text-left text-sm p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return <span key={index}>{part.text}</span>
                      }
                      return null
                    })}
                  </div>
                </div>
              ))
            )}
            {status === "streaming" && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 text-sm bg-muted text-foreground">
                  <span className="animate-pulse">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="flex flex-col gap-3 p-4 bg-card border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={status !== "ready"}
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                disabled={status !== "ready" || !input.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
            <a
              href="mailto:lilmisslimited@gmail.com"
              className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3 w-3" />
              Need more help? Email us at lilmisslimited@gmail.com
            </a>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
