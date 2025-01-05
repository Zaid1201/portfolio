import tkinter as tk
from tkinter import scrolledtext
import openai

# Set up OpenAI API key
openai.api_key = 'your_free_api_key_here'

def get_response(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"Error: {e}"

def send_message():
    user_input = user_entry.get()
    chat_window.config(state=tk.NORMAL)
    chat_window.insert(tk.END, "You: " + user_input + "\n")
    user_entry.delete(0, tk.END)
    
    response = get_response(user_input)
    chat_window.insert(tk.END, "Bot: " + response + "\n")
    chat_window.config(state=tk.DISABLED)
    chat_window.yview(tk.END)

# Set up the main application window
root = tk.Tk()
root.title("Chatbot with Generative AI")

chat_window = scrolledtext.ScrolledText(root, state=tk.DISABLED, wrap=tk.WORD)
chat_window.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

user_entry = tk.Entry(root, width=80)
user_entry.pack(padx=10, pady=10, side=tk.LEFT, fill=tk.X, expand=True)

send_button = tk.Button(root, text="Send", command=send_message)
send_button.pack(padx=10, pady=10, side=tk.RIGHT)

root.mainloop()