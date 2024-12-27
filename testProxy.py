import requests

proxies = {
    'http': 'http://127.0.0.1:10809',
    'https': 'http://127.0.0.1:10809',
}

headers = {
        'Authorization': (
        'Bearer your key'
    ),
}

response = requests.post(
    'https://api.openai.com/',
    headers=headers,
    proxies=proxies,
    json={
    }
)

print(response.json())
